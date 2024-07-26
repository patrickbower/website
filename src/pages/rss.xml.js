import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "@config";

export async function get(context) {
    const posts = await getCollection("project");
    return rss({
        title: SITE.title,
        description: SITE.desc,
        site: context.site,
        items: posts.map((post) => ({
            ...post.data,
            link: `/project/${post.slug}/`
        }))
    });
}
