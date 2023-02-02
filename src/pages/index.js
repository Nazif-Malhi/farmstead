import { lazy } from "react";

export { default as Loading } from "./Loading";
export const Mockup = lazy(() => import("./Mockup.jsx"));
export const Authentication = lazy(() => import("./Authentication"));
export const VerifyAccount = lazy(() => import("./VerifyAccount"));
export const EmailSent = lazy(() => import("./EmailSent"));
export const Dashboard = lazy(() => import("./Admin"));
