import type { ComponentDoc } from "./types";
import {
  basicFormDocs,
  buttonDoc,
  checkboxDoc,
  inputDoc,
  linkDoc,
  listInteractiveBasicFormSlugs,
} from "./basicFormSpecs";
import { dataFormDocs, listInteractiveDataSlugs } from "./dataFormSpecs";
import { feedbackFormDocs, listInteractiveFeedbackSlugs } from "./feedbackFormSpecs";
import { navigationFormDocs, listInteractiveNavigationSlugs } from "./navigationFormSpecs";
import { listInteractiveLayoutSlugs } from "./layoutFormSpecs";
import { othersFormDocs, listInteractiveOthersSlugs } from "./othersFormSpecs";

const overrides: Record<string, ComponentDoc> = {
  button: buttonDoc,
  input: inputDoc,
  checkbox: checkboxDoc,
  link: linkDoc,
};

export const componentRegistry: Record<string, ComponentDoc> = {
  ...basicFormDocs,
  ...dataFormDocs,
  ...navigationFormDocs,
  ...feedbackFormDocs,
  ...othersFormDocs,
  ...overrides,
};

export function getComponentDoc(slug: string): ComponentDoc | undefined {
  return componentRegistry[slug];
}

export function isInteractiveDoc(slug: string): boolean {
  const doc = getComponentDoc(slug);
  if (!doc) return false;
  if (doc.interactive) return true;
  if (doc.Demo) return true;
  return doc.subVariants?.some((s) => s.Demo) ?? false;
}

export {
  listInteractiveBasicFormSlugs,
  listInteractiveDataSlugs,
  listInteractiveNavigationSlugs,
  listInteractiveFeedbackSlugs,
  listInteractiveOthersSlugs,
  listInteractiveLayoutSlugs,
};
