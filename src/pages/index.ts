import { FC } from "react";
import { articlesPageRoute } from "./articles";
import { Client } from "./Client";
import { Contact } from "./Contact";
import { Intro } from "./Intro"
import { NotFound } from "./NotFound";
import { WorkFlow } from "./WorkFlow";

export interface PageRoute {
    path: string;
    Page: FC
}

export const pagesRoute: PageRoute[] = [
    {
        path: "/",
        Page: Intro
    },
    {
        path: "/contact",
        Page: Contact
    },
    {
        path: "*",
        Page: NotFound
    },
    {
        path: "/workflow",
        Page: WorkFlow
    },
    {
        path: "/client",
        Page: Client,
    },
    ...articlesPageRoute
]
