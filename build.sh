cd ui \
  && ./build.sh \
  && cd .. \
  &&  rm -rf ./templates/* \
  && cp -r ./ui/build/**/* ./templates/ \
  && cp -r ./ui/build/* ./templates/ \
  && python app.py

# docker build --no-cache -t covid-hackathon:latest .
# docker run -i -p 5000:5000 -t covid-hackathon 

