import os
import requests


ip_Api_links = [
    'https://ipdb.api.030101.xyz/?type=bestcf&country=true',
    'https://addressesapi.090227.xyz/CloudFlareYes',
    'https://addressesapi.090227.xyz/ip.164746.xyz',
    'https://ipdb.api.030101.xyz/?type=bestproxy&country=true'
    ]

ip_file = 'addressesapi111.txt'

def fetchIP(ip_Api_links):
    all_IP = []
    for link in ip_Api_links:
        response = requests.get(link)
        ip_text = response.text
        all_IP.append(ip_text)
    return all_IP

def main():
    fetch_all_IP = fetchIP(ip_Api_links)
    with open(ip_file, 'w') as f:
        f.write(fetch_all_IP)



if __name__ == "__main__":
    main()
