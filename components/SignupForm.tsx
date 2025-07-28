'use client'

import React, { useState } from 'react'
import { TextField, Button, Alert, CircularProgress } from '@mui/material'
import { insertBetaSignup } from '@/lib/supabase'

interface SignupFormProps {
  className?: string
}

export default function SignupForm({ className = '' }: SignupFormProps) {
  const [formData, setFormData] = useState({
    business_name: '',
    email: '',
    phone: '',
    city: '',
    state: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleInputChange = (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: event.target.value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      // Basic validation
      if (!formData.business_name.trim()) {
        throw new Error('Por favor ingresa el nombre de tu negocio')
      }
      if (!formData.email.trim()) {
        throw new Error('Por favor ingresa tu email')
      }
      if (!/\S+@\S+\.\S+/.test(formData.email)) {
        throw new Error('Por favor ingresa un email válido')
      }

      // Validaciones adicionales
      if (!formData.phone.trim()) {
        throw new Error('Por favor ingresa tu número telefónico')
      }
      if (!/^((\+58)?(4\d{2})\d{7})$/.test(formData.phone.replace(/[-\s]/g, '')) && !/^\+58/.test(formData.phone)) {
        throw new Error('Por favor ingresa un número venezolano válido (ej: +584141234567)')
      }
      if (!formData.city.trim()) {
        throw new Error('Por favor ingresa tu ciudad')
      }
      if (!formData.state.trim()) {
        throw new Error('Por favor ingresa tu estado')
      }

      // Submit to Supabase
      await insertBetaSignup({
        business_name: formData.business_name.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim(),
        city: formData.city.trim(),
        state: formData.state.trim()
      })

      setSuccess(true)
      setFormData({
        business_name: '',
        email: '',
        phone: '',
        city: '',
        state: ''
      })
          } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al enviar el formulario')
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className={`text-center ${className}`}>
        <Alert severity="success" className="mb-4">
          ¡Gracias por unirte a la beta de Kipli! Te contactaremos pronto.
        </Alert>
        <Button
          variant="outlined"
          onClick={() => setSuccess(false)}
          className="mt-4"
        >
          Registrar otro negocio
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      {error && (
        <Alert severity="error" className="mb-4">
          {error}
        </Alert>
      )}
      
      <TextField
        fullWidth
        label="Nombre del negocio"
        variant="outlined"
        value={formData.business_name}
        onChange={handleInputChange('business_name')}
        disabled={loading}
        required
        className="bg-white"
      />
      
      <TextField
        fullWidth
        label="Email"
        type="email"
        variant="outlined"
        value={formData.email}
        onChange={handleInputChange('email')}
        disabled={loading}
        required
        className="bg-white"
      />
      
      <TextField
        fullWidth
        label="Teléfono (+58)"
        type="tel"
        variant="outlined"
        value={formData.phone}
        onChange={handleInputChange('phone')}
        disabled={loading}
        required
        className="bg-white"
        placeholder="+584141234567"
      />
      <TextField
        fullWidth
        label="Ciudad"
        variant="outlined"
        value={formData.city}
        onChange={handleInputChange('city')}
        disabled={loading}
        required
        className="bg-white"
      />
      <TextField
        fullWidth
        label="Estado"
        variant="outlined"
        value={formData.state}
        onChange={handleInputChange('state')}
        disabled={loading}
        required
        className="bg-white"
      />
      
      <Button
        type="submit"
        variant="contained"
        fullWidth
        size="large"
        disabled={loading}
        className="btn-primary h-12"
        sx={{
          backgroundColor: '#1E40AF',
          '&:hover': {
            backgroundColor: '#1D4ED8',
          },
        }}
      >
        {loading ? (
          <CircularProgress size={24} color="inherit" />
        ) : (
          'Únete a la Beta'
        )}
      </Button>
    </form>
  )
} 