import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { X, Plus } from 'lucide-react'
import type { WorkerProfile } from '@/data/workerProfileData'
import { categories } from '@/data/workersData'

interface ProfileEditProps {
  profile: WorkerProfile
  onSave: (updatedProfile: WorkerProfile) => void
  onCancel: () => void
}

export function ProfileEdit({ profile, onSave, onCancel }: ProfileEditProps) {
  const [formData, setFormData] = useState<WorkerProfile>(profile)
  const [newSpecialty, setNewSpecialty] = useState('')
  const [newCertification, setNewCertification] = useState('')
  const [newLanguage, setNewLanguage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  const handleAddSpecialty = () => {
    if (newSpecialty.trim() && !formData.specialties.includes(newSpecialty.trim())) {
      setFormData({
        ...formData,
        specialties: [...formData.specialties, newSpecialty.trim()]
      })
      setNewSpecialty('')
    }
  }

  const handleRemoveSpecialty = (specialty: string) => {
    setFormData({
      ...formData,
      specialties: formData.specialties.filter(s => s !== specialty)
    })
  }

  const handleAddCertification = () => {
    if (newCertification.trim() && !formData.certifications.includes(newCertification.trim())) {
      setFormData({
        ...formData,
        certifications: [...formData.certifications, newCertification.trim()]
      })
      setNewCertification('')
    }
  }

  const handleRemoveCertification = (cert: string) => {
    setFormData({
      ...formData,
      certifications: formData.certifications.filter(c => c !== cert)
    })
  }

  const handleAddLanguage = () => {
    if (newLanguage.trim() && !formData.languages.includes(newLanguage.trim())) {
      setFormData({
        ...formData,
        languages: [...formData.languages, newLanguage.trim()]
      })
      setNewLanguage('')
    }
  }

  const handleRemoveLanguage = (lang: string) => {
    setFormData({
      ...formData,
      languages: formData.languages.filter(l => l !== lang)
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-[#1F1F1F] mb-6">Editar Perfil</h2>

          <div className="space-y-6">
            {/* Información básica */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Categoría
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                >
                  {categories.filter(cat => cat !== 'Todos').map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Descripción */}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Descripción profesional
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none resize-none"
                required
              />
            </div>

            {/* Especialidades */}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Especialidades
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newSpecialty}
                  onChange={(e) => setNewSpecialty(e.target.value)}
                  placeholder="Agregar especialidad..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddSpecialty())}
                />
                <Button
                  type="button"
                  onClick={handleAddSpecialty}
                  className="bg-[#DBA668] hover:bg-[#c89555] text-white"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.specialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#DBA668] bg-opacity-10 text-[#DBA668] rounded-full text-sm flex items-center gap-2"
                  >
                    {specialty}
                    <button
                      type="button"
                      onClick={() => handleRemoveSpecialty(specialty)}
                      className="hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Información profesional */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Tarifa por hora ($)
                </label>
                <input
                  type="number"
                  value={formData.hourlyRate}
                  onChange={(e) => setFormData({ ...formData, hourlyRate: parseInt(e.target.value) })}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Años de experiencia
                </label>
                <input
                  type="number"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: parseInt(e.target.value) })}
                  min="0"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Estado
                </label>
                <select
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value as WorkerProfile['availability'] })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                >
                  <option value="available">Disponible</option>
                  <option value="busy">Ocupado</option>
                  <option value="unavailable">No disponible</option>
                </select>
              </div>
            </div>

            {/* Ubicación */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  localidad
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                >
                  <option value="Centro">Centro</option>
                  <option value="Norte">Norte</option>
                  <option value="Sur">Sur</option>
                  <option value="Este">Este</option>
                  <option value="Oeste">Oeste</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Dirección completa
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Horario */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Horario inicio
                </label>
                <input
                  type="time"
                  value={formData.workingHours.start}
                  onChange={(e) => setFormData({
                    ...formData,
                    workingHours: { ...formData.workingHours, start: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                  Horario fin
                </label>
                <input
                  type="time"
                  value={formData.workingHours.end}
                  onChange={(e) => setFormData({
                    ...formData,
                    workingHours: { ...formData.workingHours, end: e.target.value }
                  })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Certificaciones */}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Certificaciones
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newCertification}
                  onChange={(e) => setNewCertification(e.target.value)}
                  placeholder="Agregar certificación..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddCertification())}
                />
                <Button
                  type="button"
                  onClick={handleAddCertification}
                  className="bg-[#DBA668] hover:bg-[#c89555] text-white"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
              <div className="space-y-2">
                {formData.certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between px-3 py-2 bg-gray-50 rounded-lg"
                  >
                    <span className="text-gray-700">{cert}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveCertification(cert)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div>
              <label className="block text-sm font-semibold text-[#1F1F1F] mb-2">
                Idiomas
              </label>
              <div className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={newLanguage}
                  onChange={(e) => setNewLanguage(e.target.value)}
                  placeholder="Agregar idioma..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#DBA668] focus:border-transparent outline-none"
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddLanguage())}
                />
                <Button
                  type="button"
                  onClick={handleAddLanguage}
                  className="bg-[#DBA668] hover:bg-[#c89555] text-white"
                >
                  <Plus className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.languages.map((lang, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm flex items-center gap-2"
                  >
                    {lang}
                    <button
                      type="button"
                      onClick={() => handleRemoveLanguage(lang)}
                      className="hover:text-red-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4">
              <Button
                type="submit"
                className="flex-1 bg-[#DBA668] hover:bg-[#c89555] text-white font-semibold py-3"
              >
                Guardar cambios
              </Button>
              <Button
                type="button"
                onClick={onCancel}
                variant="outline"
                className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
              >
                Cancelar
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}
