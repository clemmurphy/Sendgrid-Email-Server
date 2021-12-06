# Sendgrid-Email-Server

Simple email server to send mail via SendGrid. Requires additional API key. Requests should be sent as POST requests to http://localhost:PORT/send using the format:

```
{
	"from": {
		"email": "clemmurphy@gmail.com",
		"name": "Clem"
	},
	"to": "clemmurphy@gmail.com",
	"subject": "Test email",
	"text": "Email body"
}
```
