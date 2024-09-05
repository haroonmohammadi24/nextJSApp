'use client'

import { CldUploadButton } from 'next-cloudinary'
import React from 'react'

function UploadPage() {
  return (
     <div>
    {/* //<CldUploadButton uploadPreset='gdbybt2f'>
    //      {({open})=><button>upload</button>}
    //   </CldUploadButton> */}
      <CldUploadButton uploadPreset="gdbybt2f" />
      </div>
  )
}

export default UploadPage