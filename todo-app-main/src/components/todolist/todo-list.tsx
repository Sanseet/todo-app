"use client"
import React from 'react'
import { Checkbox } from "@/components/ui/checkbox"

const TodoList = () => {
  return (
    <div className="flex items-center space-x-2">
        <h1>ListSpectrum</h1>
      <Checkbox id="terms" />
        <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
            Accept terms and conditions
        </label>
    </div>
  )
}

export default TodoList
