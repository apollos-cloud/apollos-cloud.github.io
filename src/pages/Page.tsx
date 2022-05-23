import { Grid } from "@mui/material";
import  { FC, ReactNode } from "react";

export interface PageProps {
    title: string;
    children: ReactNode| ReactNode[]
}

export const Page: FC<PageProps> = ({ title,children }) => <Grid container>
    <Grid item md={24}>
        {
            title
        }
    </Grid>

    <Grid item md={24}>
        {
            children
        }
    </Grid>
</Grid>