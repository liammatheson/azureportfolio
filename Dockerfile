# Use Nginx to serve static files
FROM nginx:alpine

# Copy the local build folder into the container
COPY dist/ /usr/share/nginx/html

# Expose default HTTP port
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]