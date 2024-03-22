import { getClient } from "../getClient";
import { blockContentFields } from "./shared";

export async function getPagePaths() {
  const query = `*[_type == "page"]{
    _updatedAt,
    "path": slug.current,
  }`;
  const pagePaths = await getClient().fetch(query);

  return { pagePaths };
}

export async function getPage(slug) {
  const query = `*[_type == "page" && slug.current == "${slug}"] | order(_createdAt asc)[0]{
    _id, internalTitle,title, slug, mainImage,metaDescription,
    sections[]{
      ...,
      _type == "teamMembers" => {
        ...,
        description[]{
          ${blockContentFields}
        },
        teamMemberList[]{
          ...,
          image{
            asset->
          },
          description[]{
            ${blockContentFields}
          }
        }
      },
      _type == "hero" => {
          ...,
          image{
            ...,
            asset->
          },
          cta{
            ...,
            target->{title, slug, _id},
          },
          description[]{
            ${blockContentFields}
          }
      },
      _type == "content" => {
          content[]{
            ${blockContentFields}
          },
      },
      _type == "twoColumnContent" => {
        ...,
        columns[]{
          _type == "inlineImage" =>{
            ...,
            image{
              ...,
              _type == "image" => {
                ...,
                asset->
              },
            },
          },
          _type == "content" =>{
          ...,
          content[]{
            ${blockContentFields}
          },
          },
        }
      },
      _type == "faq" => {
        ...,
        questions_answers[]{
          ...,
          question,
          answer[]{
          ${blockContentFields}
          }
        }
      },
      _type == "testimonials" => {
        testimonialList[]{
          ...,
          endorser->{
            ...,
            image{
            asset->
            },
          },
          endorserDescription
        }
      },
    }
  }`;
  const pageContent = await getClient().fetch(query);
  // console.log(query);
  return { pageContent };
}
