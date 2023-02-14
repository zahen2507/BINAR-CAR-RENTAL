import React, { useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Select from "react-select";
import "../assets/css/Filter.css";

const Filter = (filterData) => {
  const [active, setActive] = useState(false);
  const [edit, setEdit] = useState(false);
  const location = useLocation();
  let { id } = useParams();

  let placeholder1 = "Masukan Kapasitas Mobil";
  let placeholder2 = "Ketik nama/tipe mobil";
  let placeholder3 = "Masukan Harga Sewa per Hari";
  let placeholder4 = "Status";

  if (location.pathname === `/find-car-result/${id}`) {
    placeholder1 = "";
    placeholder2 = "";
    placeholder3 = "";
    placeholder4 = "";
  }

  const overlayActive = () => {
    document.body.style.overflow = "hidden";
    setActive(true);
  };
  const overlayDeactive = () => {
    document.body.style.overflow = "";
    setActive(false);
    filterData.setHeroVisible(false);
    setEdit(!edit);
  };

  // const handleEdit = () => {

  // }

  const titleRef = useRef();

  function handleBackClick() {
    titleRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }

  const styleForm = {
    width: "100%",
    padding_right: 0,
  };

  return (
    <section className="filter" ref={titleRef} onClick={handleBackClick}>
      <div className="container">
        <div
          className={`overlay-bg-2 ${active ? "overlay-active" : ""}`}
          onClick={overlayDeactive}
        />
        <div className={`filter-border ${active ? "overlay-active" : ""}`}>
          <div className="row">
            <form className="filter-form" onSubmit={filterData.getData}>
              <div
                style={
                  location.pathname === `/find-car-result/${id}`
                    ? styleForm
                    : {}
                }
                className="form"
              >
                <div className="col-lg-3">
                  <div className="form-border">
                    <div className="mb-3">
                      <label className="form-label">Nama Mobil</label>
                      <input
                        type="text"
                        onClick={overlayActive}
                        className="form-control"
                        placeholder={placeholder2}
                        style={{
                          placeholder: (base) => ({
                            ...base,
                            fontSize: "10px",
                          }),
                        }}
                        ref={filterData.carName}
                        disabled={
                          location.pathname === `/find-car-result/${id}`
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Kategori</label>
                    <Select
                      isDisabled={
                        location.pathname === `/find-car-result/${id}`
                      }
                      className="select-form"
                      classNamePrefix="select"
                      placeholder={placeholder1}
                      styles={{
                        placeholder: (base) => ({
                          ...base,
                          fontSize: "10px",
                        }),
                      }}
                      onFocus={overlayActive}
                      ref={filterData.category}
                      onChange={(e) =>
                        (filterData.category.current.value = e.value)
                      }
                      options={[
                        { value: "small", label: "2 - 4 orang" },
                        { value: "medium", label: "4 - 6 orang" },
                        { value: "large", label: "6 - 8 orang" },
                      ]}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Harga</label>
                    <Select
                      isDisabled={
                        location.pathname === `/find-car-result/${id}`
                      }
                      placeholder={placeholder3}
                      styles={{
                        placeholder: (base) => ({
                          ...base,
                          fontSize: "10px",
                        }),
                      }}
                      className="select-form"
                      classNamePrefix="select"
                      onFocus={overlayActive}
                      ref={filterData.priceRange}
                      onChange={(e) =>
                        (filterData.priceRange.current.value = e.value)
                      }
                      options={[
                        { value: "small", label: "< Rp. 400.000" },
                        { value: "medium", label: "Rp. 400.000 - Rp. 600.000" },
                        { value: "large", label: "> Rp. 600.000" },
                      ]}
                    />
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="form-border">
                    <label className="form-label">Status</label>
                    <Select
                      isDisabled={
                        location.pathname === `/find-car-result/${id}`
                      }
                      className="select-form"
                      classNamePrefix="select"
                      placeholder={placeholder4}
                      styles={{
                        placeholder: (base) => ({
                          ...base,
                          fontSize: "10px",
                        }),
                      }}
                      onFocus={overlayActive}
                      ref={filterData.statusOrder}
                      onChange={(e) =>
                        (filterData.statusOrder.current.value = e.value)
                      }
                      options={[
                        { value: "false", label: "Disewa" },
                        { value: "true", label: "Tersedia" },
                      ]}
                    />
                  </div>
                </div>
              </div>
              {location.pathname !== `/find-car-result/${id}` && (
                <div className="submit">
                  <div className="button">
                    <button
                      className="btn"
                      type="submit"
                      onClick={overlayDeactive}
                    >
                      Cari Mobil
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
