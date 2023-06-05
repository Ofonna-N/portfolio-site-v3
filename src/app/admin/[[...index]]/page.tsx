"use client";

import { NextStudio } from "next-sanity/studio";

import nextConfig from "../../../../sanity.config";

export default function Studio() {
  //  Supports the same props as `import {Studio} from 'sanity'`, `config` is required
  return <NextStudio config={nextConfig} />;
}
