#!/bin/bash

echo "🚀 Preparing aivesting.net for deployment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "📦 Installing dependencies..."
npm install

echo "🔨 Building project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "📁 Your built files are in the 'dist' folder"
    echo ""
    echo "🌐 Next steps:"
    echo "1. Go to vercel.com and sign up/login"
    echo "2. Create a new project and import your GitHub repo"
    echo "3. Deploy the project"
    echo "4. Add your domain 'aivesting.net' in Vercel settings"
    echo "5. Configure DNS records as shown in DEPLOYMENT_GUIDE.md"
    echo ""
    echo "📖 See DEPLOYMENT_GUIDE.md for detailed instructions"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi 