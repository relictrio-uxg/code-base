import React from "react";
import './style.css';
import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'

import { Gallery, Item } from 'react-photoswipe-gallery'
import { ViewMore } from "../../atoms/Btn";

export const GalleryImg = () => (
  <div className="main">
  <div className="gallery">
    <div>
      <h1 className="title">OUR CULTURE</h1>
      <p className="subtitle">A Glimpse of our office</p>
    </div>
  <Gallery>
    <Item
      original="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group.png?time=1622425898"
      thumbnail="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group.png?time=1622425898"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img className="pic" ref={ref} onClick={open} src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group.png?time=1622425898" />
      )}
    </Item>
    <Item
      original="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-2.png?time=1622425898"
      thumbnail="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-2.png?time=1622425898"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img className="pics" ref={ref} onClick={open} src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-2.png?time=1622425898" />
      )}
    </Item>
    <Item
      original="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-3.png?time=1622425898"
      thumbnail="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-3.png?time=1622425898"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img className="pics" ref={ref} onClick={open} src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-3.png?time=1622425898" />
      )}
    </Item>
    <Item
      original="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-4.png?time=1622425898"
      thumbnail="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-4.png?time=1622425898"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img className="pics" ref={ref} onClick={open} src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-4.png?time=1622425898" />
      )}
    </Item>
    <Item
      original="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-5.png?time=1622425898"
      thumbnail="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-5.png?time=1622425898"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img className="pics" ref={ref} onClick={open} src="https://secureservercdn.net/160.153.138.71/rpn.c04.myftpupload.com/wp-content/uploads/2020/11/Mask-Group-5.png?time=1622425898" />
      )}
    </Item>
  </Gallery>
  <div style={{textAlign:'center'}}>
  <ViewMore style={{ marginTop:'150px'}}/>
  </div>
  </div>
  
  </div>
  
)