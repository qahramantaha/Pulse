# Recovery Rules

## Health Check Frequency
- every 10 seconds

## Failure Threshold
- 3 consecutive failed health checks = unhealthy

## Early Actions
- 1 or 2 failed checks = retry only

## Confirmed Failure
- create incident
- set service status to unhealthy
- send recovery request to healing-engine

## Recovery Action
- first action is restart

## Restart Rules
- maximum 2 automatic restarts per incident

## Escalation
- if restart attempt fail, mark service as degraded