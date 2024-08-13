import { defineConfig } from "sanity";

import {structureTool} from 'sanity/structure'
import schemas from "./sanity/schemas";

const config = defineConfig({
    projectId: "014u203a",
    dataset:"production",
    title:"My personal website",
    apiVersion:"2024-08-09",
    basePath:"/admin",
    plugins: [structureTool()],
    schema: {types: schemas },
})
export default config;