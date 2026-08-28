export const errorHandler = (err, req, res, next) => {
  console.error('[YojnaMitra Error Handler]', err);
  const status = err.statusCode || 500;
  const message = err.message || 'सर्वर में अप्रत्याशित समस्या आई है (Internal Server Error).';
  res.status(status).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};
