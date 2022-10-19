import React from 'react';
import DefaultLayout from '../../ui/layout/DefaultLayout';
import BlogHero from './components/blogHero/BlogHero';
import BlogPosts from './components/blogPosts/BlogPosts';

export default function Blogs() {
  return (
    <DefaultLayout>
      <BlogHero />
      <BlogPosts />
    </DefaultLayout>
  );
}
