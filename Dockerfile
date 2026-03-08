# Use the official Nginx Alpine image (lightweight and secure)
FROM nginx:alpine

# Nginx-এর ডিফল্ট ডিরেক্টরি মুছে ফেলে তা পরিষ্কার করা হচ্ছে (ঐচ্ছিক কিন্তু ভালো অভ্যাস)
RUN rm -rf /usr/share/nginx/html/* 

# Copy the current directory contents to the Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80 so the container can accept traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]