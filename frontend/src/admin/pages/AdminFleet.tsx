import React, { useState, useEffect } from 'react';
import {
  Car,
  Plus,
  Edit,
  Trash2,
  Users,
} from 'lucide-react';
import type { FleetVehicle } from '../types/adminTypes';
import { adminApi } from '../services/adminApi';
import { StatusBadge } from '../components/StatusBadge';
import { ImageUploadPicker } from '../components/ImageUploadPicker';

export const AdminFleet: React.FC = () => {
  const [fleet, setFleet] = useState<FleetVehicle[]>([]);
  const [editingVehicle, setEditingVehicle] = useState<FleetVehicle | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [category, setCategory] = useState<FleetVehicle['category']>('4x4_safari_land_cruiser');
  const [capacity, setCapacity] = useState(7);
  const [selfDriveRate, setSelfDriveRate] = useState(160);
  const [driverRate, setDriverRate] = useState(200);
  const [plate, setPlate] = useState('UBM 412K');
  const [status, setStatus] = useState<FleetVehicle['status']>('available');
  const [imageUrl, setImageUrl] = useState('');
  const [features, setFeatures] = useState<string[]>([]);

  useEffect(() => {
    adminApi.getFleet().then(setFleet).catch(() => {});
  }, []);

  const loadFleet = async () => {
    const list = await adminApi.getFleet();
    setFleet(list);
  };

  const openEdit = (v: FleetVehicle) => {
    setEditingVehicle(v);
    setName(v.name);
    setCategory(v.category);
    setCapacity(v.capacityPassengers);
    setSelfDriveRate(v.dailyRateSelfDriveUSD);
    setDriverRate(v.dailyRateWithDriverUSD);
    setPlate(v.licensePlate);
    setStatus(v.status);
    setImageUrl(v.imageUrl);
    setFeatures(v.features || []);
    setShowModal(true);
  };

  const openNew = () => {
    setEditingVehicle(null);
    setName('');
    setCategory('4x4_safari_land_cruiser');
    setCapacity(7);
    setSelfDriveRate(160);
    setDriverRate(200);
    setPlate('UBM 888X');
    setStatus('available');
    setImageUrl('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80');
    setFeatures(['Pop-up roof for 360° game viewing', 'Dual spare tires', 'Heavy-duty 4WD']);
    setShowModal(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    const v: FleetVehicle = {
      id: editingVehicle ? editingVehicle.id : `veh_${Date.now()}`,
      name,
      category,
      capacityPassengers: capacity,
      dailyRateSelfDriveUSD: selfDriveRate,
      dailyRateWithDriverUSD: driverRate,
      licensePlate: plate,
      status,
      imageUrl,
      features,
    };

    await adminApi.saveFleetVehicle(v);
    setShowModal(false);
    await loadFleet();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this safari vehicle from the fleet?')) {
      await adminApi.deleteFleetVehicle(id);
      await loadFleet();
    }
  };

  const handleQuickStatusChange = async (v: FleetVehicle, newStatus: FleetVehicle['status']) => {
    const updated = { ...v, status: newStatus };
    await adminApi.saveFleetVehicle(updated);
    await loadFleet();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <Car className="h-6 w-6 text-brand-green" />
            Car Hire & Safari Fleet Manager
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Maintain your 4x4 Land Cruisers, safari vans, daily rental rates, and operational availability.
          </p>
        </div>

        <button
          onClick={openNew}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-brand-green/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          <span>Add Fleet Vehicle</span>
        </button>
      </div>

      {/* Fleet Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fleet.map((vehicle) => (
          <div
            key={vehicle.id}
            className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#11190e] border border-[#223519] transition-all hover:border-brand-green/40 shadow-xl"
          >
            {/* Image & Plate */}
            <div className="relative h-44 w-full overflow-hidden bg-black/40">
              <img
                src={vehicle.imageUrl}
                alt={vehicle.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11190e] via-transparent to-black/30" />

              {/* Status Badge */}
              <div className="absolute top-3 left-3">
                <StatusBadge status={vehicle.status} />
              </div>

              {/* Plate pill */}
              <div className="absolute bottom-3 right-3 rounded-lg bg-black/80 px-2.5 py-1 text-xs font-mono font-bold text-amber-300 border border-amber-400/30 backdrop-blur-sm">
                {vehicle.licensePlate}
              </div>
            </div>

            {/* Content Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-sm font-bold text-white line-clamp-1">{vehicle.name}</h3>

                <div className="mt-2 flex items-center gap-2 text-xs text-zinc-400">
                  <Users className="h-3.5 w-3.5 text-brand-green" />
                  <span>{vehicle.capacityPassengers} Passenger Seats</span>
                </div>

                {/* Rates */}
                <div className="mt-3 grid grid-cols-2 gap-2 p-2.5 rounded-xl bg-[#162213] border border-[#233519]">
                  <div>
                    <p className="text-[10px] text-zinc-400">Self-Drive</p>
                    <p className="text-xs font-bold text-emerald-400">
                      ${vehicle.dailyRateSelfDriveUSD}/day
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] text-zinc-400">With Safari Guide</p>
                    <p className="text-xs font-bold text-brand-accent">
                      ${vehicle.dailyRateWithDriverUSD}/day
                    </p>
                  </div>
                </div>

                {/* Features list */}
                <div className="mt-3 space-y-1">
                  {vehicle.features.slice(0, 3).map((f, i) => (
                    <p key={i} className="text-[11px] text-zinc-300 flex items-center gap-1.5 truncate">
                      <span className="text-brand-green">•</span> {f}
                    </p>
                  ))}
                </div>
              </div>

              {/* Actions & Status Quick Toggles */}
              <div className="pt-3 border-t border-[#1b2b13] flex items-center justify-between">
                {/* Status Switcher */}
                <select
                  value={vehicle.status}
                  onChange={(e) =>
                    handleQuickStatusChange(vehicle, e.target.value as FleetVehicle['status'])
                  }
                  className="rounded-lg bg-[#182613] border border-[#273d1f] px-2 py-1 text-[11px] text-zinc-300 focus:outline-none"
                >
                  <option value="available">Ready</option>
                  <option value="on_safari">On Safari</option>
                  <option value="maintenance">Service</option>
                </select>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => openEdit(vehicle)}
                    title="Edit Vehicle"
                    className="rounded-lg p-1.5 text-zinc-400 hover:bg-brand-green/20 hover:text-brand-green transition-colors"
                  >
                    <Edit className="h-4 w-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(vehicle.id)}
                    title="Delete Vehicle"
                    className="rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/15 hover:text-rose-400 transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add / Edit Vehicle Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-full max-w-lg rounded-3xl bg-[#11190e] border border-[#283e1c] p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#213318]">
              <h3 className="text-base font-bold text-white">
                {editingVehicle ? 'Edit Vehicle Details' : 'Add New Safari Vehicle'}
              </h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white">
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="mt-4 space-y-3.5">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Vehicle Name & Model *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Toyota Land Cruiser V8 Pop-up Safari Edition"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    License Number Plate *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="UBM 412K"
                    value={plate}
                    onChange={(e) => setPlate(e.target.value)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white font-mono uppercase focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Passenger Seats
                  </label>
                  <input
                    type="number"
                    min={2}
                    max={60}
                    value={capacity}
                    onChange={(e) => setCapacity(parseInt(e.target.value, 10) || 7)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-emerald-400 mb-1">
                    Self-Drive Rate ($/day)
                  </label>
                  <input
                    type="number"
                    min={20}
                    value={selfDriveRate}
                    onChange={(e) => setSelfDriveRate(parseInt(e.target.value, 10) || 0)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-brand-accent mb-1">
                    With Driver Rate ($/day)
                  </label>
                  <input
                    type="number"
                    min={20}
                    value={driverRate}
                    onChange={(e) => setDriverRate(parseInt(e.target.value, 10) || 0)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <ImageUploadPicker
                  label="Vehicle Photo *"
                  value={imageUrl}
                  onChange={setImageUrl}
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#213318]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:bg-[#172314] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-5 py-2 text-xs cursor-pointer"
                >
                  Save Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminFleet;
