"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from 'react'
import { supabase } from '@/utils/supabase-client'

type User = {
  id: string
  name: string
  email: string
}

export default function Hero() {
  const [users, setUsers] = useState<User[]>([])
  const [newUser, setNewUser] = useState({ name: '', email: '' })

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const { data, error } = await supabase
      .from('users')
      .select('*')
    if (error) console.error('Error fetching users:', error)
    else setUsers(data || [])
  }

  async function addUser() {
    const { data, error } = await supabase
      .from('users')
      .insert([newUser])
    if (error) console.error('Error adding user:', error)
    else {
      fetchUsers()
      setNewUser({ name: '', email: '' })
    }
  }

  return (
    <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          Everything App
          <br />
          <span className="text-gray-400">for your teams</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          Huly, an open-source platform, serves as an all-in-one replacement of Linear, Jira, Slack, and Notion.
        </p>
        <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
          <span className="relative z-10">Try it free</span>
          <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </Button>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Our Users:</h2>
          <ul className="mb-4">
            {users.map(user => (
              <li key={user.id}>{user.name} - {user.email}</li>
            ))}
          </ul>
          <div className="flex flex-col items-center space-y-2">
            <input
              type="text"
              placeholder="Name"
              value={newUser.name}
              onChange={(e) => setNewUser({...newUser, name: e.target.value})}
              className="px-4 py-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              value={newUser.email}
              onChange={(e) => setNewUser({...newUser, email: e.target.value})}
              className="px-4 py-2 border rounded"
            />
            <Button onClick={addUser}>Add User</Button>
          </div>
        </div>
      </div>
    </div>
  )
}