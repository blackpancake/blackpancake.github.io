import requests

url = "https://blackpancake.github.io/codemao.json"
resp = requests.get(url)
print(resp.json()['NovelGetter']['version'])