#### Introduction to Domain Name
Every computer has an unique address namely IP Address to communicate or identify another computer. While computer communication that numbers are converted to binary notation.
But we type a string value (website name) and converted to IP address (during request sent to DNS) and vice versa. These are done by Domain Name Server (DNS). It implements a distributed database which translates IP address into a unique alphanumeric address which is referred to as <b>Domain Names.</b>  

If a people wanna get their own domain IP address(like google) then they can register for domain through registrar (Eg: GoDaddy). or else webserver's ip address itself given to that domain. Registrar will register your domain on behalf of you to ICANN(The Internet Corporation for Assigned Names and Numbers) and get the IP address and even maintain further.
##### DNS converts domain name given by user to IP address.
DNS has organized all the domain names in a hierarchical structure. At the top of this hierarchy there will be Top-level domains and then second and third-level domains and sub-domains. Below given is termed as Fully qualified domain name(FQDN).

![image](https://user-images.githubusercontent.com/58984578/118225399-ad4ae380-b4a2-11eb-8b7d-a32588797516.png)

#### Types of domain
##### Top Level Domains (TLD) :
The Top Level Domains are at the highest level in DNS structure of the Internet. It is sometimes also referred to as an extension. It is further categorized into-
  * Country code Top Level Domain (ccTLDs) :
      It consists of two-letter domains that include one entry for every country. Example – .in for India, .au for Australia, .us for United Nations, .jp for Japan etc. To target the local audience it is used by companies and organizations. Only the residents of the country are allowed to use their specified ccTLD but now some countries allowed the users outside their country to register their corresponding ccTLDs.
  * Generic Top Level Domains (gTLDs) :
      These are open for registration to all the users regardless of their citizenship, residence or age. Some of the gTLD s are .com for commercial sites, .net for network companies, .biz for business, .org for organizations, .edu for education.

![image](https://user-images.githubusercontent.com/58984578/118225380-a45a1200-b4a2-11eb-8a09-b8088a9f76d3.png)

##### Second Level :
It is just below the TLD in the DNS hierarchy. It is also named as the label. Example: www. linkedin.co.in where co is second level domain. 

![image](https://user-images.githubusercontent.com/58984578/118225356-986e5000-b4a2-11eb-83ac-42c20b4ce532.png)

##### Third Level :
It is directly below the second level. Example: in yahoo.co.in, .yahoo is the third level domain.

![image](https://user-images.githubusercontent.com/58984578/118225710-3cf09200-b4a3-11eb-8b33-88c13916cb59.png)

##### Sub-domain :
It is the part of a higher domain name in DNS hierarchy. Example: yahoo.com comprises a subdomain of the .com domain, and login.yahoo.com comprises a subdomain of the domain .yahoo.com.

![image](https://user-images.githubusercontent.com/58984578/118225768-572a7000-b4a3-11eb-92a6-df5b5a069155.png)

#### Working

We illustrate this for google.com

1. PC (browser){checks through cache memory of browser or OS if we already visted or not}

2. If its not present in cache memory it will communicate to DNS. <b>Resolving Name server/resolver server (Like Help desk)</b>. This server is actually a ISP. It will checks for IP address if it fails to find the address then that query (IP request) will be redirected to <b>root server (like librarian)</b>

3. The root servers are the top most server in the DNS hierarchy.
There are 13 sets of these root servers and they are strategically placed around world, and they are operated by 12 different organizations and each set of these root servers has their own unique IP address. So when root server receives query for IP address, root server is not going to know what IP address is, but root server does know where to send resolver to help it find IP address. So root server will direct resolver to TLD or top-level domain server for .com domain (or other extension).

4. The <b>top-level domain server (like Achive keeper)</b> stores address information for [top-level domains](https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains) such as .com and so. It ypically about the domain name associated with it, such as the geographical area it was created in, its purpose, or the organization that owns it.This particular TLD server manages .com domain which domain is a part of. Now, TLD direct to <b>Authoritative name server (like translator)</b>

5. <b>Authoritative name server</b> are responsible for knowing everything about domain which includes IP address. Finally, resolver will tell your computer IP address (t knw who requested ip for google.com) and then your computer can now retrieve google web page from dns. Also once resolver receives IP address, it will store it in its cache memory in case it receives another query for google.com to avoid go through all these steps. (Reverse IP - converting IP address to Domain name)
