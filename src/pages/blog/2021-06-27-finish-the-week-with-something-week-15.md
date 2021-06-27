---
title: Finish the Week with Something - Week 15
date: '2021-06-27T24:00:00.000Z'
song: 'oogway - two years'
backgroundColor: 'white'
tags: ["weekly", "cycling", "devops"]
---
# Summary
Acquired a new domain, setup some DNS stuff.

# Kubernetes and Web Stuff
Acquired a new domain, huitoctobre.com, named after the song Huit Octobre 1971 by Cortex which was famously sampled by Madlib on the MF Doom
track One Beer. This is the website I'm gonna use to host my projects. Otherwise I delved into automatic DNS management using 
[ExternalDNS](https://www.digitalocean.com/community/tutorials/how-to-automatically-manage-dns-records-from-digitalocean-kubernetes-using-externaldns)
which lets you create an A record in Cloud Ocean by simply applying an annotations to a Kubernetes Service. I ended up having to modify
the default template Visual Studio generates to include annotations in the service.yaml file. This way I can assign a domain or subdomain name to my load balancer which is used as a gateway to my Reflection Service.

```yaml
apiVersion: v1
kind: Service
metadata:
  name: {{ template "reflectionapi.fullname" . }}
  labels:
    app: {{ template "reflectionapi.name" . }}
    chart: {{ template "reflectionapi.chart" . }}
    release: {{ .Release.Name }}
    heritage: {{ .Release.Service }}
{{- with .Values.service.annotations }}
  annotations:
{{ toYaml . | indent 4 }}
{{- end }}
spec:
  type: {{ .Values.service.type }}
  ports:
    - port: {{ .Values.service.port }}
      targetPort: http
      protocol: TCP
      name: http
  selector:
    app: {{ template "reflectionapi.name" . }}
    release: {{ .Release.Name }}
```

Then I simply added the annotation value to my value.yaml file.

```yaml
service:
  type: LoadBalancer
  port: 80
  annotations:
    external-dns.alpha.kubernetes.io/hostname: "huitoctobre.com"
```
