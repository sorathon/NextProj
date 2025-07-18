'use client';

interface PageProps {
title :string;
}

export default function Page({ title }: PageProps) {
  return (
    <div>
      <h1>{title}</h1>
      <p>This is a page that uses client-side rendering.</p>
    </div>
  );
}