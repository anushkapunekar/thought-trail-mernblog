import React, { useEffect, useState } from 'react';
import { Table, Button } from 'flowbite-react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export default function DashPosts() {
  const { currentUser } = useSelector((state) => state.user);
  const [userPosts, setUserPosts] = useState([]);
  const [showMore, setShowMore] = useState(true);
  
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`/api/post/getposts?userId=${currentUser._id}`);
        const data = await res.json();
        if (res.ok) {
          setUserPosts(data.posts);
          if (data.posts.length < 9) {
            setShowMore(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchPosts();
    }
  }, [currentUser._id]);

  const handleShowMore = async () => {
    const startIndex = userPosts.length;
    try {
      const res = await fetch(`/api/post/getposts?userId=${currentUser._id}&startIndex=${startIndex}`);
      const data = await res.json();
      if (res.ok) {
        setUserPosts((prevPosts) => [...prevPosts, ...data.posts]);
        if (data.posts.length < 9) {
          setShowMore(false);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="p-5 max-w-7xl mx-auto">
      {currentUser.isAdmin && userPosts.length > 0 ? (
        <>
          <div className="overflow-x-auto shadow-lg rounded-lg">
            <Table hoverable className="min-w-full table-auto text-left bg-white dark:bg-gray-800">
              <Table.Head className="bg-gray-50 dark:bg-gray-700">
                <Table.HeadCell className="px-4 py-3">Date Updated</Table.HeadCell>
                <Table.HeadCell className="px-4 py-3">Post Image</Table.HeadCell>
                <Table.HeadCell className="px-4 py-3">Post Title</Table.HeadCell>
                <Table.HeadCell className="px-4 py-3">Category</Table.HeadCell>
                <Table.HeadCell className="px-4 py-3">Delete</Table.HeadCell>
                <Table.HeadCell className="px-4 py-3">Edit</Table.HeadCell>
              </Table.Head>

              {userPosts.map((post) => (
                <Table.Body className="divide-y" key={post._id}>
                  <Table.Row className="bg-white dark:bg-gray-800">
                    <Table.Cell className="px-6 py-4">
                      {new Date(post.updatedAt).toLocaleDateString()}
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      <Link to={`/post/${post.slug}`}>
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-20 h-12 object-cover mx-auto rounded"
                        />
                      </Link>
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">
                      <Link
                        className="font-medium text-gray-900 dark:text-white"
                        to={`/post/${post.slug}`}
                      >
                        {post.title}
                      </Link>
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4">{post.category}</Table.Cell>
                    <Table.Cell className="px-6 py-4 text-red-500 hover:underline cursor-pointer">
                      Delete
                    </Table.Cell>
                    <Table.Cell className="px-6 py-4 text-teal-500 hover:underline">
                      <Link to={`/update-post/${post._id}`}>Edit</Link>
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
            </Table>
          </div>

          {showMore && (
            <button
              onClick={handleShowMore}
              className="mt-4 w-full bg-teal-500 text-white py-2 rounded-lg shadow-md hover:bg-teal-600"
            >
              Show more
            </button>
          )}
        </>
      ) : (
        <p className="text-center text-gray-500">You have no posts yet!</p>
      )}
    </div>
  );
}
