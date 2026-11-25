/** @typedef {import('./BlueFlutedGlassEngine.d.ts').BlueFlutedGlassOptions} BlueFlutedGlassOptions */
/** @typedef {import('./BlueFlutedGlassEngine.d.ts').BlueFlutedGlassInstance} BlueFlutedGlassInstance */

const SCENE_W = 960;
const SCENE_H = 1080;
const LOGO_VIEW_W = 603.900954;
const LOGO_VIEW_H = 208;

const VERT_SRC = `
attribute vec2 position;
void main(){
  gl_Position=vec4(position,0.0,1.0);
}
`;

const FRAG_SRC = `
precision highp float;
uniform vec2 resolution;
uniform float time;
float blob(vec2 p,vec2 center,vec2 radius,float angle){
  p-=center;float c=cos(angle),s=sin(angle);
  p=mat2(c,-s,s,c)*p/radius;
  return exp(-dot(p,p));
}
vec3 fluid(vec2 p,float t){
  float s=sin(t),c=cos(t);
  p.x+=.025*sin(p.y*7.0+t*2.0);
  float trunk=blob(p,vec2(.52+.15*s-.07*sin(t*2.0),.76),vec2(.235,.46),-.12-.52*s);
  float crown=blob(p,vec2(.77-.55*s,.20-.10*sin(t*2.0)),vec2(.235,.23),-.50+.45*s);
  float baseY=1.045-.17*p.x+.075*sin(p.x*5.0+t*2.0);
  float base=exp(-pow((p.y-baseY)/.092,2.0));
  float hole=blob(p,vec2(.85-.55*s,.59-.13*s),vec2(.19+.025*c,.32),.1+.5*s);
  float density=(trunk+.56*crown+.90*base)*(1.0-.78*hole);
  vec3 color=mix(vec3(.957),vec3(.66,.80,.89),smoothstep(.015,.20,density));
  color=mix(color,vec3(.10,.48,.73),smoothstep(.16,.49,density));
  color=mix(color,vec3(.015,.135,.28),smoothstep(.40,.73,density));
  color=mix(color,vec3(.008,.025,.087),smoothstep(.62,.93,density));
  return color;
}
void main(){
  vec2 uv=vec2(gl_FragCoord.x/resolution.x,1.0-gl_FragCoord.y/resolution.y);
  float rib=fract(uv.x*71.0)-.5;
  vec2 refracted=uv+vec2(rib*.018,(rib*rib-.0833)*.034);
  float t=time*6.28318530718/28.0;
  vec3 color=fluid(refracted,t)*.40;
  color+=fluid(refracted+vec2(0.,.025),t)*.24;
  color+=fluid(refracted-vec2(0.,.025),t)*.24;
  color+=fluid(refracted+vec2(0.,.055),t)*.06;
  color+=fluid(refracted-vec2(0.,.055),t)*.06;
  float edge=pow(abs(rib)*2.0,10.0);
  float blue=(1.0-color.r)*smoothstep(.02,.18,color.b-color.r);
  color+=vec3(.018,.025,.03)*(rib*.65+edge*.24)*blue;
  gl_FragColor=vec4(clamp(color,0.0,1.0),1.0);
}
`;

const LOGO_SVG = `<svg class="bfg-logo" width="603.900954" height="208" viewBox="0 0 603.900954 208" role="img" aria-label="LeiBox" focusable="false"><title>LeiBox</title><g fill="currentColor"><g transform="scale(0.499071) translate(-63.742 -47.613)"><path d="M212 59.403 A88 88 0 0 1 300 59.403 L404.258 119.597 A88 88 0 0 1 448.258 195.807 L448.258 316.193 A88 88 0 0 1 404.258 392.403 L300 452.597 A88 88 0 0 1 212 452.597 L107.742 392.403 A88 88 0 0 1 63.742 316.193 L63.742 195.807 A88 88 0 0 1 107.742 119.597 Z M247 273.618802154 L247 392.618802154 A27 27 0 0 0 287.5 416.001488056 L390.55702305 356.501488056 A27 27 0 0 0 363.55702305 309.736116252 L301 345.85343035 L301 273.618802154 A27 27 0 0 0 247 273.618802154 Z" fill-rule="evenodd"/></g><g transform="translate(235.900954 60)"><path d="M0 8 A8 8 0 0 1 16 8 V77 A7 7 0 0 0 23 84 H48 A8 8 0 0 1 48 100 H23 A23 23 0 0 1 0 77 Z" fill-rule="evenodd"/><path d="M123.944409 85.395136 A38 38 0 1 1 129.032923 47.27946 A8 8 0 0 1 114.282219 53.477582 A22 22 0 1 0 111.336237 75.544552 A8 8 0 0 1 123.944409 85.395136 Z" fill-rule="evenodd"/><path d="M75.097844 82.27721 L152.097844 44.27721 A7 7 0 0 0 145.902156 31.72279 L68.902156 69.72279 A7 7 0 0 0 75.097844 82.27721 Z" fill-rule="evenodd"/><path d="M142 38 A7 7 0 0 1 156 38 V100 H142 Z" fill-rule="evenodd"/><path d="M140 10 A10 10 0 1 1 160 10 A10 10 0 1 1 140 10 Z" fill-rule="evenodd"/><path d="M0 0 H33 C52 0 62 10 62 25 C62 36 55 43 47 46 C60 49 64 57 64 71 C64 90 53 100 33 100 H0 Z M16 15 H32 C42 15 47 20 47 28 C47 36 42 40 32 40 H16 Z M16 54 H32 C44 54 51 58 51 70 C51 81 43 85 32 85 H16 Z" fill-rule="evenodd" transform="translate(168 0)"/><path d="M236 62 A36 38 0 1 1 308 62 A36 38 0 1 1 236 62 Z M252 62 A20 22 0 1 1 292 62 A20 22 0 1 1 252 62 Z" fill-rule="evenodd"/><path d="M304 24 L322 24 L336 48 L350 24 L368 24 L345 62 L368 100 L350 100 L336 76 L322 100 L304 100 L327 62 Z" fill-rule="evenodd"/></g></g></svg>`;

const STYLES = `
:host,.bfg-mount{
  display:block;
  width:100%;
  max-width:100%;
  box-sizing:border-box;
  font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;
}
.bfg-scene{
  position:relative;
  overflow:hidden;
  isolation:isolate;
  width:100%;
  max-width:100%;
  margin:0 auto;
  aspect-ratio:960/1080;
  background:#f4f4f4;
  box-sizing:border-box;
}
.bfg-scene--fill{
  aspect-ratio:auto;
  height:100%;
  min-height:0;
}
.bfg-canvas-wrap{
  position:absolute;
  inset:0;
  overflow:hidden;
  pointer-events:none;
}
.bfg-canvas{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  display:block;
  filter:blur(1.25px);
  transform:scale(1.008);
  transform-origin:center center;
}
.bfg-fallback{
  position:absolute;
  inset:0;
  width:100%;
  height:100%;
  display:block;
}
.bfg-logo-layer{
  position:absolute;
  inset:0;
  display:flex;
  align-items:center;
  justify-content:center;
  pointer-events:none;
  z-index:2;
}
.bfg-logo-layer .bfg-logo{
  width:22%;
  height:auto;
  color:#fff;
  filter:drop-shadow(0 1px 3px #00132e20);
  flex-shrink:0;
}
.bfg-logo-layer .bfg-logo--pacstrust{
  width:min(40%,18rem);
}
.bfg-control{
  position:absolute;
  inset:0;
  z-index:3;
  border:0;
  padding:0;
  margin:0;
  background:transparent;
  cursor:default;
}
.bfg-control:focus{
  outline:none;
}
.bfg-control:focus-visible{
  outline:3px solid #fff;
  outline-offset:-7px;
  box-shadow:inset 0 0 0 9px #0b3c69;
}
.bfg-visually-hidden{
  position:absolute;
  width:1px;
  height:1px;
  padding:0;
  margin:-1px;
  overflow:hidden;
  clip:rect(0,0,0,0);
  white-space:nowrap;
  border:0;
}
`;

/**
 * @param {HTMLElement} outerHost
 * @param {BlueFlutedGlassOptions} [options]
 * @returns {BlueFlutedGlassInstance}
 */
export function createBlueFlutedGlass(outerHost, options = {}) {
  let destroyed = false;
  let userPaused = false;
  let elapsed = 0;
  let lastNow = 0;
  let rafId = 0;
  let running = false;
  let pageVisible = !document.hidden;
  let inView = true;
  let useWebGL = true;

  let reducedMotion =
    options.reducedMotion ??
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const shadow =
    outerHost.shadowRoot ??
    outerHost.attachShadow({ mode: "open" });

  const styleEl = document.createElement("style");
  styleEl.textContent = STYLES;
  shadow.appendChild(styleEl);

  const mount = document.createElement("div");
  mount.className = "bfg-mount";
  if (options.height != null) {
    mount.style.height =
      typeof options.height === "number"
        ? `${options.height}px`
        : String(options.height);
  } else {
    mount.style.height = "100%";
  }
  shadow.appendChild(mount);

  const scene = document.createElement("div");
  scene.className = options.height != null ? "bfg-scene" : "bfg-scene bfg-scene--fill";
  scene.style.maxWidth = `${SCENE_W}px`;
  if (!options.height) {
    scene.style.maxWidth = "none";
    scene.style.width = "100%";
    scene.style.height = "100%";
  }
  mount.appendChild(scene);

  const canvasWrap = document.createElement("div");
  canvasWrap.className = "bfg-canvas-wrap";
  scene.appendChild(canvasWrap);

  const canvas = document.createElement("canvas");
  canvas.className = "bfg-canvas";
  canvasWrap.appendChild(canvas);

  const fallbackCanvas = document.createElement("canvas");
  fallbackCanvas.className = "bfg-fallback";
  fallbackCanvas.style.display = "none";
  canvasWrap.appendChild(fallbackCanvas);

  const resolveLogoMarkup = () => {
    if (options.brandLogo === "none" || options.logoSvg === null) return null;
    if (typeof options.logoSvg === "string") return options.logoSvg;
    if (options.brandLogo === "pacstrust") return options.logoSvg ?? null;
    return LOGO_SVG;
  };
  const logoMarkup = resolveLogoMarkup();
  if (logoMarkup) {
    const logoLayer = document.createElement("div");
    logoLayer.className = "bfg-logo-layer";
    logoLayer.innerHTML = logoMarkup;
    scene.appendChild(logoLayer);
  }

  const control = document.createElement("button");
  control.type = "button";
  control.className = "bfg-control";
  control.setAttribute("role", "button");
  control.tabIndex = 0;
  control.setAttribute("aria-pressed", "false");
  control.setAttribute("aria-label", "Pause background animation");

  const live = document.createElement("span");
  live.className = "bfg-visually-hidden";
  live.setAttribute("aria-live", "polite");
  live.textContent = "Animation playing";

  scene.appendChild(control);
  scene.appendChild(live);

  /** @type {WebGLRenderingContext | null} */
  let gl = null;
  /** @type {WebGLProgram | null} */
  let program = null;
  let posBuffer = null;
  let uResolution = null;
  let uTime = null;

  const initWebGL = () => {
    try {
      gl = canvas.getContext("webgl", {
        alpha: false,
        antialias: false,
        depth: false,
        preserveDrawingBuffer: true,
      });
      if (!gl) throw new Error("no webgl");

      const vs = gl.createShader(gl.VERTEX_SHADER);
      const fs = gl.createShader(gl.FRAGMENT_SHADER);
      if (!vs || !fs) throw new Error("shader");

      gl.shaderSource(vs, VERT_SRC);
      gl.shaderSource(fs, FRAG_SRC);
      gl.compileShader(vs);
      gl.compileShader(fs);
      if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(vs) || "vs");
      }
      if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(fs) || "fs");
      }

      program = gl.createProgram();
      if (!program) throw new Error("program");
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) || "link");
      }

      posBuffer = gl.createBuffer();
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.bufferData(
        gl.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
        gl.STATIC_DRAW,
      );

      const posLoc = gl.getAttribLocation(program, "position");
      uResolution = gl.getUniformLocation(program, "resolution");
      uTime = gl.getUniformLocation(program, "time");

      gl.useProgram(program);
      gl.enableVertexAttribArray(posLoc);
      gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
      gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

      gl.clearColor(0.9568627, 0.9568627, 0.9568627, 1);
      return true;
    } catch {
      useWebGL = false;
      canvas.style.display = "none";
      fallbackCanvas.style.display = "block";
      return false;
    }
  };

  const drawFallback = (w, h) => {
    const ctx = fallbackCanvas.getContext("2d");
    if (!ctx) return;
    const scaleX = w / SCENE_W;
    const scaleY = h / SCENE_H;
    const scale = Math.min(scaleX, scaleY);
    const drawW = SCENE_W * scale;
    const drawH = SCENE_H * scale;
    const ox = (w - drawW) / 2;
    const oy = (h - drawH) / 2;

    ctx.fillStyle = "#f4f4f4";
    ctx.fillRect(0, 0, w, h);

    const cx = ox + 525 * scale;
    const cy = oy + 520 * scale;
    const r0 = 20 * scale;
    const r1 = 440 * scale;
    const g = ctx.createRadialGradient(cx, cy, r0, cx, cy, r1);
    g.addColorStop(0, "#020820");
    g.addColorStop(0.45, "#073d69");
    g.addColorStop(0.7, "#378fbe");
    g.addColorStop(1, "#f4f4f4");
    ctx.fillStyle = g;
    ctx.fillRect(ox, oy, drawW, drawH);
  };

  const drawFrame = (timeSec) => {
    const rect = scene.getBoundingClientRect();
    const cssW = Math.max(1, Math.floor(rect.width));
    const cssH = Math.max(1, Math.floor(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = Math.max(1, Math.floor(cssW * dpr));
    const h = Math.max(1, Math.floor(cssH * dpr));

    if (useWebGL && gl && program) {
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
      }
      gl.viewport(0, 0, w, h);
      gl.uniform2f(uResolution, w, h);
      gl.uniform1f(uTime, timeSec);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    } else {
      if (fallbackCanvas.width !== w || fallbackCanvas.height !== h) {
        fallbackCanvas.width = w;
        fallbackCanvas.height = h;
      }
      drawFallback(w, h);
    }
  };

  const syncAria = () => {
    const paused = userPaused || reducedMotion;
    control.setAttribute("aria-pressed", paused ? "true" : "false");
    control.setAttribute(
      "aria-label",
      paused
        ? "Resume background animation"
        : "Pause background animation",
    );
    live.textContent = paused ? "Animation paused" : "Animation playing";
  };

  const shouldAnimate = () =>
    !reducedMotion && !userPaused && pageVisible && inView;

  const loop = (now) => {
    rafId = 0;
    if (destroyed) return;

    if (shouldAnimate()) {
      if (lastNow === 0) lastNow = now;
      const dt = Math.min(0.05, (now - lastNow) / 1000);
      lastNow = now;
      elapsed += dt;
    } else {
      lastNow = now;
    }

    drawFrame(elapsed);

    if (shouldAnimate()) {
      rafId = requestAnimationFrame(loop);
      running = true;
    } else {
      running = false;
    }
  };

  const wake = () => {
    if (destroyed || rafId !== 0) return;
    if (!shouldAnimate() && !reducedMotion) {
      drawFrame(elapsed);
    }
    if (shouldAnimate()) {
      lastNow = 0;
      rafId = requestAnimationFrame(loop);
    }
  };

  const togglePause = () => {
    userPaused = !userPaused;
    syncAria();
    wake();
  };

  const onControlClick = (e) => {
    e.preventDefault();
    togglePause();
  };

  const onControlKey = (e) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      togglePause();
    }
  };

  const onVisibility = () => {
    pageVisible = !document.hidden;
    wake();
  };

  const resizeObserver = new ResizeObserver(() => {
    drawFrame(elapsed);
    wake();
  });
  resizeObserver.observe(scene);

  const intersectionObserver = new IntersectionObserver(
    (entries) => {
      inView = entries.some((e) => e.isIntersecting);
      wake();
    },
    { threshold: 0 },
  );
  intersectionObserver.observe(scene);

  const motionMq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const onMotionChange = () => {
    if (options.reducedMotion === undefined) {
      reducedMotion = motionMq.matches;
    }
    syncAria();
    drawFrame(elapsed);
    wake();
  };
  motionMq.addEventListener("change", onMotionChange);

  control.addEventListener("click", onControlClick);
  control.addEventListener("keydown", onControlKey);
  document.addEventListener("visibilitychange", onVisibility);

  initWebGL();
  drawFrame(0);
  syncAria();
  if (!reducedMotion) {
    rafId = requestAnimationFrame(loop);
  }

  return {
    destroy() {
      if (destroyed) return;
      destroyed = true;
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      motionMq.removeEventListener("change", onMotionChange);
      control.removeEventListener("click", onControlClick);
      control.removeEventListener("keydown", onControlKey);
      document.removeEventListener("visibilitychange", onVisibility);

      if (gl && program) {
        if (posBuffer) gl.deleteBuffer(posBuffer);
        gl.deleteProgram(program);
        const ext = gl.getExtension("WEBGL_lose_context");
        if (ext) ext.loseContext();
      }
      gl = null;
      program = null;
      shadow.innerHTML = "";
    },
    setReducedMotion(value) {
      reducedMotion = value;
      syncAria();
      drawFrame(elapsed);
      wake();
    },
    isPaused() {
      return userPaused || reducedMotion;
    },
  };
}
