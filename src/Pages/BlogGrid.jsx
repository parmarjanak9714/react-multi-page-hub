import React, { useState, useEffect } from 'react';

const BlogGrid = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('https://sobold.co.uk/wp-json/wp/v2/posts/');
        const data = await response.json();

        if (Array.isArray(data)) {
          setPosts(data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error("data loading issue:", error);
        setIsLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (isLoading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px', fontSize: '18px', color: '#666' }}>
        🔄 Loading live insights from SoBold...
      </div>
    );
  }

  return (
    <div className="blog-container">
      <h2 className="blog-header">Latest Insights</h2>

      <div className="blog-grid">
        {posts.map((post) => {
          
          const postImageUrl = post?.yoast_head_json?.og_image?.[0]?.url;

          const titleHtml = post?.title?.rendered || "No Title Available";
          const rawExcerpt = post?.excerpt?.rendered || "";
          
          const cleanText = rawExcerpt.replace(/<[^>]*>/g, '');
          const excerptHtml = cleanText.length > 120 ? cleanText.substring(0, 120) + '...' : cleanText;

          return (
            <div key={post.id} className="blog-card" style={{ background: '#fff', padding: '20px', 
            borderRadius: '12px', border: '1px solid #ddd', marginBottom: '20px' }}>
              
              {/* ૨. આ ઈમેજ ટેગ હવે લૂપમાં આવતા દરેક બ્લોગની ઈમેજ ઓટોમેટીક છાપશે */}
              <div className="blog-image-wrapper" style={{ overflow: 'hidden', borderRadius: '8px', 
                marginBottom: '15px' }}>
                <img 
                  src={postImageUrl} 
                  alt="Blog Visual" 
                  style={{ 
                    width: '100%', 
                    height: '220px', 
                    objectFit: 'cover', 
                    display: 'block'
                  }} 
                />
              </div>

              <div className="blog-tags">
                <span className="tag-news">News</span>
                <span className="tag-seo">Technical SEO</span>
              </div>

              <h3 
                className="blog-title"
                dangerouslySetInnerHTML={{ __html: titleHtml }}
              />

              <p className="blog-excerpt">
                {excerptHtml}
              </p>

              <span className="blog-read-time">⏱️ 5 min read</span>

            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BlogGrid;
