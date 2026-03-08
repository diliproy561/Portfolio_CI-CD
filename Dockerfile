# Use the official Nginx Alpine image (lightweight and secure)
FROM nginx:alpine

# Remove the default Nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the current directory contents to the Nginx web root
COPY . /usr/share/nginx/html

# Expose port 80 so the container can accept traffic
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]