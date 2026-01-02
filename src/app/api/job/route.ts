import { NextRequest, NextResponse } from 'next/server'
import { writeFileSync, readFileSync, existsSync, mkdirSync } from 'fs'
import pathJoin from 'path'

export const POST = async (request: Request) => {
  const body = await request.formData()
  // save file in local file system
  const file = body.get('file')
  if (!file) {
    return NextResponse.json({ status: 'error', message: 'File not found' }, { status: 400 })
  }
  try {
    const content = Buffer.from(await (file as File).arrayBuffer());
    const fileName = (new Date().getTime() + (file as File).name).replace(/ /g, '_')
    let tempraryImageDirectory: string;
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
      tempraryImageDirectory = './public/uploads/';
    } else {
      tempraryImageDirectory = '/tmp/';
    }

    // Ensure the directory exists
    if (!existsSync(tempraryImageDirectory)) {
      mkdirSync(tempraryImageDirectory, { recursive: true });
    }

    writeFileSync(pathJoin.join(tempraryImageDirectory, fileName), new Uint8Array(content))
    // return file url if development
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
      return NextResponse.json({ status: 'success', fileUrl: 'http://localhost:3000/api/job/?file=' + fileName }, { status: 200 })
    }
    return NextResponse.json({ status: 'success', fileUrl: 'https://devtitechnologie.com/api/job/?file=' + fileName }, { status: 200 })
  } catch (error) {
    console.error('Error uploading file:', error)
    return NextResponse.json({ status: 'error', message: 'Failed to upload file' }, { status: 500 })
  }
}

export const GET = async (request: NextRequest) => {
  try {
    const file = request.nextUrl.searchParams.get('file') || ''

    if (!file) {
      return NextResponse.json({ status: 'error', message: 'File parameter is required' }, { status: 400 })
    }

    let tempraryImageDirectory: string;
    if (process.env.NODE_ENV && process.env.NODE_ENV === 'development') {
      tempraryImageDirectory = './public/uploads/';
    } else {
      tempraryImageDirectory = '/tmp/';
    }

    const filePath = pathJoin.join(tempraryImageDirectory, file)

    // Check if file exists
    if (!existsSync(filePath)) {
      return NextResponse.json({ status: 'error', message: 'File not found' }, { status: 404 })
    }

    const savedfile = readFileSync(filePath)
    const fileContentType = file.split('.').pop() as 'pdf' | 'docx' | 'doc'
    return new NextResponse(
      new Uint8Array(savedfile),
      {
        headers: {
          'Content-Type': fileContentType === 'pdf' ? 'application/pdf' : 'application/msword',
        },
      }
    )
  } catch (error) {
    console.error('Error retrieving file:', error)
    return NextResponse.json({ status: 'error', message: 'Failed to retrieve file' }, { status: 500 })
  }
}
