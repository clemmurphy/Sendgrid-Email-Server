# Sendgrid-Email-Server

Simple email server to send mail via SendGrid. Requires additional API key. Requests should be sent as POST requests to http://localhost:PORT/send using the format:

```
{
	"from": {
		"email": "verified_email@test.com",
		"name": "Name"
	},
	"to": "recipient_email@test.com",
	"subject": "Test email",
	"text": "Email body"
}
```
