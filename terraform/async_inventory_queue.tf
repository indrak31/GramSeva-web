# Nemesis Remediation: SQS FIFO Decoupled Queue
# Target: Orders Service -> Inventory
resource "aws_sqs_queue" "inventory_reservation_queue" {
  name                        = "inventory-reservations.fifo"
  fifo_queue                  = true
  content_based_deduplication = true
  visibility_timeout_seconds  = 30
  message_retention_seconds   = 86400
  redrive_policy = jsonencode({
    deadLetterTargetArn = aws_sqs_queue.inventory_dlq.arn
    maxReceiveCount     = 3
  })
}
