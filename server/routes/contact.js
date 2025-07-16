import express from 'express';
import Contact from '../models/Contact.js';
import { auth } from '../middleware/auth.js';
// Get all contacts (admin only)
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const contacts = await Contact.find()
      .populate('assignedTo', 'name email')
      .populate('respondedBy', 'name email')
      .sort({ createdAt: -1 });

    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});
export default router;