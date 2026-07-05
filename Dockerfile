FROM denoland/deno:alpine-2.9.1
WORKDIR /app
COPY . .
RUN deno cache src/mod.ts
EXPOSE 8000
CMD ["deno", "run", "prod"]
