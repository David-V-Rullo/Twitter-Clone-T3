import React from "react";
import Button from "./Button";

function NewTweetForm() {
  return (
    <div className="flex gap-4">
      <textarea
        className="flex-grow resize-none overflow-hidden p-4 text-lg outline-none"
        placeholder="What's happening?"
      />
      <Button>HERE YE</Button>
    </div>
  );
}

export default NewTweetForm;
