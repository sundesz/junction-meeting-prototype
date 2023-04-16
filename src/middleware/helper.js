export const unknownEndpoint = (req, res) => {
  res.status(404).json({ error: `Unknown Endpoint ${req.originalUrl}` })
}
