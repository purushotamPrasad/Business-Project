import React from 'react';
import './Blog.css';
import BlogImage from '../../assets/blog/blog.jpg'


export default function Blog() {
  return (
    
    <>
    <section id="blog">
        <div className="container">
            <div className="blog_wrapper">
                <div className="blog_col">
                    <h3>WE HELP BUSINESSES LAUNCH, GROW AND SUCCEED</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                         Sed beatae nisi maxime cumque tempore debitis molestiae
                          explicabo similique, nostrum quae quis fuga.
                         Eveniet est unde natus repudiandae modi optio explicabo!
                    </p>
                    <div className="btn_wrapper">
                        <a href="/" className="btn">Get Started</a>
                    </div>
                </div>
                <div className="blog_col">
                    <div className="blog_image">
                        <img src={BlogImage} alt="aaj" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
