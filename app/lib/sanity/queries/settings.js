import { getClient } from "../getClient";

export async function getSiteConfig() {
  const siteConfig = await getClient().fetch(` *[_type == 'siteConfig'][0] `);

  return { siteConfig };
}

export async function getCompanyInformation() {
  const query = ` *[_type == 'siteConfig'][0]{
    companyInformation->{
      ...,
      projectCoordinator->
    }
  }`;
  const { companyInformation } = await getClient().fetch(query);

  return { companyInformation };
}
