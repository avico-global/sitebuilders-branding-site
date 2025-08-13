import React from 'react';
import Layout from '../../components/common/Layout';
import ResourcesHero from '../../components/container/Resources/ResourcesHero';
import BlogArticles from '../../components/container/Resources/BlogArticles';
import ResourcesFAQs from '../../components/container/Resources/FAQs';
import DocumentationSupport from '../../components/container/Resources/DocumentationSupport';
import WebinarsEvents from '../../components/container/Resources/WebinarsEvents';
import CTA from '../../components/container/CTA';

export default function Resources() {
  return (
    <Layout>
      <ResourcesHero />
      <BlogArticles />
      <ResourcesFAQs />
      <DocumentationSupport />
      <WebinarsEvents />
      <CTA />
    </Layout>
  );
} 