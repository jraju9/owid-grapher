import * as React from 'react'
import * as db from 'db/db'

import { JsonError } from 'utils/server/serverUtil'
import { Chart } from 'db/model/Chart'
import { ChartConfigProps } from 'charts/ChartConfig'
import { ChartPage } from 'site/server/views/ChartPage'
import { renderToHtmlPage } from 'site/server/siteBaking'
import { getVariableData } from 'db/model/Variable'
import { Post } from 'db/model/Post';
import { urlToSlug } from 'charts/Util';

export async function chartDataJson(variableIds: number[]) {
    return await getVariableData(variableIds)
}

export async function chartPage(slug: string) {
    const chart = await Chart.getBySlug(slug)

    if (!chart)
        throw new JsonError("No such chart", 404)

    const c: ChartConfigProps = chart.config
    c.id = chart.id

    const postSlug = urlToSlug(c.originUrl||"")
    const post = postSlug ? await Post.bySlug(postSlug) : undefined

    return renderToHtmlPage(<ChartPage chart={c} post={post}/>)
}