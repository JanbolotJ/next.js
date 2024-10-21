import React from 'react';



interface Contact {
  title: string,
  body: string,
}

interface PostInfoProps {
  post: Contact
}

export default function PostInfo({ post }: PostInfoProps) {
  const { title, body } = post || {};

  if (!post) {
    return <h3>Empty post</h3>;
  }

  return (
    <>
      <h3>{title}</h3>
      <div>
        {body}
      </div>
    </>
  );
}
