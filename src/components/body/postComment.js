import React from "react";

import Homer from "../../assets/profile_homer.png";

function postComment() {
  return (
    <div className="comments">
      <img src={Homer} />
      <p>
        <strong>Bart</strong> Teste
      </p>
    </div>
  );
}

export default postComment;
