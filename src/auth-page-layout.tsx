import React from 'react'

interface AuthPageLayoutProps {
  authForm: React.ReactNode
}

export const AuthPageLayout: React.FC<AuthPageLayoutProps> = ({
  authForm,
}) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    {authForm}
  </div>
)
