FROM judge0/judge0:latest

RUN sed -i "/draw do/a scope '/judge' do" ./config/routes.rb
RUN sed -i "/'health#workers'/a end" ./config/routes.rb