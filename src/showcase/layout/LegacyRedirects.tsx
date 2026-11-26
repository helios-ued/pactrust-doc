import { Navigate, useParams } from "react-router-dom";
import {
  componentShowcasePath,
  layoutShowcasePath,
  templateShowcasePath,
} from "../nav";

export function LegacyComponentRedirect() {
  const { slug } = useParams();
  return <Navigate to={componentShowcasePath(slug ?? "")} replace />;
}

export function LegacyTemplateRedirect() {
  const { slug } = useParams();
  return <Navigate to={templateShowcasePath(slug ?? "")} replace />;
}

export function LegacyLayoutRedirect() {
  const { slug } = useParams();
  return <Navigate to={layoutShowcasePath(slug ?? "")} replace />;
}