import Link from "next/link";
import React from "react";

const PostControl = ({ next, previous }) => {
  return (
    <div className="post-control">
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="control prev">
            <Link href={`/portfolio/${previous.slug}`}>
              <span> <span className="fa fa-angle-left"></span> &nbsp; Précédent</span>
            </Link>
          </div>
          <div className="control next">
            <Link href={`/portfolio/${next.slug}`}>
              <span>Suivant &nbsp;<span className="fa fa-angle-right"></span></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostControl;
