import React from 'react';
import BlogPreview from '../blog-preview';
import style from './blog.module.scss';

const fakePosts = [
  {
    title: 'How to pretend to be working',
    slug: 'how-to-pretend-to-be-working',
    cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b93d844-89fc-474c-82a8-a34a32cbae6f/ddn3cgp-cd7a1058-2071-4d6c-b470-c443c6fda77e.jpg/v1/fill/w_1280,h_777,q_75,strp/a_tribute_to_the_jupiter_2_by_jamesf63_ddn3cgp-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzc3IiwicGF0aCI6IlwvZlwvNWI5M2Q4NDQtODlmYy00NzRjLTgyYTgtYTM0YTMyY2JhZTZmXC9kZG4zY2dwLWNkN2ExMDU4LTIwNzEtNGQ2Yy1iNDcwLWM0NDNjNmZkYTc3ZS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.cEVwWbu_D9-uZv0Jhz35KWDmf4DXdp4MLsQ_CaJPGfA',
    description: 'Let\'s face it, no one is productive 8 hours long. But if we must do it anyway, why not cheap a little bit?',
    createdAt: '12/12/2019'
  },
  {
    title: 'A jorney to your mind',
    slug: 'journey-to-your-mind',
    cover: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9b3ee237-c9bd-4c6d-b86c-3d2bb18358eb/d8w440x-60b7cf6f-b38d-4619-b4c8-4b72aa65b354.png/v1/fill/w_1024,h_624,q_80,strp/landscape_10_by_yakovlev_vad_d8w440x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjI0IiwicGF0aCI6IlwvZlwvOWIzZWUyMzctYzliZC00YzZkLWI4NmMtM2QyYmIxODM1OGViXC9kOHc0NDB4LTYwYjdjZjZmLWIzOGQtNDYxOS1iNGM4LTRiNzJhYTY1YjM1NC5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.jgREYmLuV85OaS4IpeXrhpswMz_Opx05D2OCnXFJkLI',
    description: 'A new jorney begins. We gonna unrevail the secrets of your mind. I hope you have no secrets.',
    createdAt: '09/12/2019'
  }
];

function Blog() {
  return (
    <div className={style.blog}>
      {
        fakePosts
          .map(post => (
            <BlogPreview
              key={post.slug}
              post={post}
            />
          ))
      }
    </div>
  );
}

export default Blog;