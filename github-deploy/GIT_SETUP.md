# Git Setup Instructions

## Step 1: Install Git LFS (if not already installed)

Download and install from: https://git-lfs.github.com/

Or via command line:
```powershell
# Using Chocolatey (if installed)
choco install git-lfs

# Or download installer from https://git-lfs.github.com/
```

## Step 2: Initialize Git in github-deploy folder

```powershell
cd github-deploy
git init
git lfs install
```

## Step 3: Track video files with LFS

```powershell
git lfs track "*.mp4"
git lfs track "*.png"
git add .gitattributes
```

## Step 4: Add all files

```powershell
git add .
git commit -m "Initial commit - Decision Intelligence OS v3.0"
```

## Step 5: Connect to GitHub and push

```powershell
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Alternative: If Git LFS is not available

If you can't use Git LFS, you have two options:

### Option A: Use a CDN for videos
- Upload videos to Cloudinary, AWS S3, or similar
- Update video paths in code to use CDN URLs

### Option B: Compress videos
- Reduce video quality/size before uploading
- Use tools like HandBrake to compress

