FROM denoland/deno:alpine-2.7.1
WORKDIR /app
RUN apk add --no-cache git
RUN git clone https://github.com/paigely/maize.moe.git .
RUN deno install
EXPOSE 8000
CMD ["deno", "run", "prod"]
