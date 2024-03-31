"use client"
import {
  TextField,
  IconButton,
  YouTubeIcon,
  AddPhotoAlternateIcon,
  LinkIcon,
  Button,
} from "../../components";

import { useState } from "react";

export default function PublishArea() {
  const [newContent, setNewContent] = useState("");
  return (
    <div className="bg-gray-50 border p-5 rounded">
      <div className="w-full p-3 rounded">
        <h2 className="font-semibold text-xl text-gray-600 mb-5">
          Yeni bir içerik paylaş
        </h2>
        <TextField
          className="w-full"
          id="outlined-multiline-static"
          multiline
          rows={2}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          placeholder="Yeni bir şeyler deneyin..."
        />
        <div className="flex justify-between items-center mt-5">
          <div className="flex items-center" id="iconsElement">
            <IconButton>
              <YouTubeIcon />
            </IconButton>

            <IconButton>
              <AddPhotoAlternateIcon />
            </IconButton>
          </div>

          <Button variant="contained" className="bg-blue-500">
            Paylaş
          </Button>
        </div>
      </div>
    </div>
  );
}
