import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'Article 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Orci nulla pellentesque dignissim enim sit amet venenatis. Ac turpis egestas maecenas pharetra convallis posuere. Tempus egestas sed sed risus. Sit amet consectetur adipiscing elit duis tristique. Egestas diam in arcu cursus euismod quis viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Massa placerat duis ultricies lacus. Gravida cum sociis natoque penatibus et magnis. Fames ac turpis egestas integer. Sit amet mauris commodo quis imperdiet. In tellus integer feugiat scelerisque varius. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Id porta nibh venenatis cras sed felis. Arcu felis bibendum ut tristique. Nulla aliquet porttitor lacus luctus accumsan.',
      img: 'https://thumbs.dreamstime.com/b/generic-person-gray-photo-placeholder-man-silhouette-white-background-144511705.jpg'
    },

    {
      id: 2,
      title: 'Article 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Orci nulla pellentesque dignissim enim sit amet venenatis. Ac turpis egestas maecenas pharetra convallis posuere. Tempus egestas sed sed risus. Sit amet consectetur adipiscing elit duis tristique. Egestas diam in arcu cursus euismod quis viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Massa placerat duis ultricies lacus. Gravida cum sociis natoque penatibus et magnis. Fames ac turpis egestas integer. Sit amet mauris commodo quis imperdiet. In tellus integer feugiat scelerisque varius. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Id porta nibh venenatis cras sed felis. Arcu felis bibendum ut tristique. Nulla aliquet porttitor lacus luctus accumsan.',
      img: 'https://media.istockphoto.com/id/1038117350/vector/vector-quote-template-with-text-placeholder-in-trendy-style.jpg?s=612x612&w=0&k=20&c=XrLDr1k2r0pfmWhcsGrjy-jOrkM4NCiyNEM1ShPf5Gc='
    },

    {
      id: 3,
      title: 'Article 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Orci nulla pellentesque dignissim enim sit amet venenatis. Ac turpis egestas maecenas pharetra convallis posuere. Tempus egestas sed sed risus. Sit amet consectetur adipiscing elit duis tristique. Egestas diam in arcu cursus euismod quis viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Massa placerat duis ultricies lacus. Gravida cum sociis natoque penatibus et magnis. Fames ac turpis egestas integer. Sit amet mauris commodo quis imperdiet. In tellus integer feugiat scelerisque varius. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Id porta nibh venenatis cras sed felis. Arcu felis bibendum ut tristique. Nulla aliquet porttitor lacus luctus accumsan.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQotEaeZertqB0d40mFsSwUDss6kiotyovgScfS-Vw3A&usqp=CAU&ec=48665701'
    },

    {
      id: 4,
      title: 'Article 4',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Orci nulla pellentesque dignissim enim sit amet venenatis. Ac turpis egestas maecenas pharetra convallis posuere. Tempus egestas sed sed risus. Sit amet consectetur adipiscing elit duis tristique. Egestas diam in arcu cursus euismod quis viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Massa placerat duis ultricies lacus. Gravida cum sociis natoque penatibus et magnis. Fames ac turpis egestas integer. Sit amet mauris commodo quis imperdiet. In tellus integer feugiat scelerisque varius. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Id porta nibh venenatis cras sed felis. Arcu felis bibendum ut tristique. Nulla aliquet porttitor lacus luctus accumsan.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQotEaeZertqB0d40mFsSwUDss6kiotyovgScfS-Vw3A&usqp=CAU&ec=48665701'
    },

    {
      id: 5,
      title: 'Article 5',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Orci nulla pellentesque dignissim enim sit amet venenatis. Ac turpis egestas maecenas pharetra convallis posuere. Tempus egestas sed sed risus. Sit amet consectetur adipiscing elit duis tristique. Egestas diam in arcu cursus euismod quis viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Massa placerat duis ultricies lacus. Gravida cum sociis natoque penatibus et magnis. Fames ac turpis egestas integer. Sit amet mauris commodo quis imperdiet. In tellus integer feugiat scelerisque varius. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Id porta nibh venenatis cras sed felis. Arcu felis bibendum ut tristique. Nulla aliquet porttitor lacus luctus accumsan.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQotEaeZertqB0d40mFsSwUDss6kiotyovgScfS-Vw3A&usqp=CAU&ec=48665701'
    },

    {
      id: 6,
      title: 'Article 6',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a. Orci nulla pellentesque dignissim enim sit amet venenatis. Ac turpis egestas maecenas pharetra convallis posuere. Tempus egestas sed sed risus. Sit amet consectetur adipiscing elit duis tristique. Egestas diam in arcu cursus euismod quis viverra. In nulla posuere sollicitudin aliquam ultrices sagittis orci a. Massa placerat duis ultricies lacus. Gravida cum sociis natoque penatibus et magnis. Fames ac turpis egestas integer. Sit amet mauris commodo quis imperdiet. In tellus integer feugiat scelerisque varius. Facilisi nullam vehicula ipsum a arcu cursus vitae congue mauris. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Id porta nibh venenatis cras sed felis. Arcu felis bibendum ut tristique. Nulla aliquet porttitor lacus luctus accumsan.',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQotEaeZertqB0d40mFsSwUDss6kiotyovgScfS-Vw3A&usqp=CAU&ec=48665701'
    },
  ]

  return (
    <div className = 'home'>
      <div className="posts">
        {posts.map(post => (
          <div className="post" key = {post.id}>
            <div className="img">
              <img src = {post.img} alt="post image" />
            </div>
            <div className="content">
              <Link className = 'link' to = {`/posts/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.description}</p>
              <button>Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home